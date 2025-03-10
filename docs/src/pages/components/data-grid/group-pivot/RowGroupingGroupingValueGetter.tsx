import * as React from 'react';
import {
  DataGridPro,
  GridApiRef,
  GridColumns,
  GridEvents,
  GridRowGroupingModel,
  GridGroupingValueGetterParams,
  GridRenderCellParams,
  useGridApiRef,
  gridColumnVisibilityModelSelector,
} from '@mui/x-data-grid-pro';
import { useMovieData } from '@mui/x-data-grid-generator';

const INITIAL_GROUPING_COLUMN_MODEL = ['composer', 'decade'];

const useKeepGroupingColumnsHidden = (
  apiRef: GridApiRef,
  columns: GridColumns,
  initialModel: GridRowGroupingModel,
  leafField?: string,
) => {
  const prevModel = React.useRef(initialModel);

  React.useEffect(() => {
    apiRef.current.subscribeEvent(GridEvents.rowGroupingModelChange, (newModel) => {
      const columnVisibilityModel = {
        ...gridColumnVisibilityModelSelector(apiRef.current.state),
      };
      newModel.forEach((field) => {
        if (!prevModel.current.includes(field)) {
          columnVisibilityModel[field] = false;
        }
      });
      prevModel.current.forEach((field) => {
        if (!newModel.includes(field)) {
          columnVisibilityModel[field] = true;
        }
      });
      apiRef.current.setColumnVisibilityModel(columnVisibilityModel);
      prevModel.current = newModel;
    });
  }, [apiRef]);

  return React.useMemo(
    () =>
      columns.map((colDef) =>
        initialModel.includes(colDef.field) ||
        (leafField && colDef.field === leafField)
          ? { ...colDef, hide: true }
          : colDef,
      ),
    [columns, initialModel, leafField],
  );
};

export default function RowGroupingGroupingValueGetter() {
  const data = useMovieData();
  const apiRef = useGridApiRef();

  const columnsWithComposer = React.useMemo(
    () => [
      ...data.columns,
      {
        field: 'composer',
        headerName: 'Composer',
        renderCell: (params: GridRenderCellParams<{ name: string } | undefined>) =>
          params.value?.name,
        groupingValueGetter: (
          params: GridGroupingValueGetterParams<{ name: string }>,
        ) => params.value.name,
        width: 200,
      },
      {
        field: 'decade',
        headerName: 'Decade',
        valueGetter: (params): number => Math.floor(params.row.year / 10) * 10,
        groupingValueGetter: (params): number =>
          Math.floor(params.row.year / 10) * 10,
        renderCell: (params: GridRenderCellParams<number>) =>
          `${params.value.toString().slice(-2)}'s`,
      },
    ],
    [data.columns],
  );

  const columns = useKeepGroupingColumnsHidden(
    apiRef,
    columnsWithComposer,
    INITIAL_GROUPING_COLUMN_MODEL,
  );

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        {...data}
        apiRef={apiRef}
        columns={columns}
        initialState={{
          rowGrouping: {
            model: INITIAL_GROUPING_COLUMN_MODEL,
          },
        }}
        experimentalFeatures={{
          rowGrouping: true,
        }}
      />
    </div>
  );
}

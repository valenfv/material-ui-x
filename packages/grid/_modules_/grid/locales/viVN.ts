import { viVN as viVNCore } from '@mui/material/locale';
import { GridLocaleText } from '../models/api/gridLocaleTextApi';
import { getGridLocalization, Localization } from '../utils/getGridLocalization';

const viVNGrid: Partial<GridLocaleText> = {
  // Root
  noRowsLabel: 'Không có dữ liệu',
  noResultsOverlayLabel: 'Không tìm thấy kết quả.',
  errorOverlayDefaultLabel: 'Có lỗi xảy ra.',

  // Density selector toolbar button text
  toolbarDensity: 'Độ giãn',
  toolbarDensityLabel: 'Độ giãn',
  toolbarDensityCompact: 'Trung bình',
  toolbarDensityStandard: 'Tiêu chuẩn',
  toolbarDensityComfortable: 'Rộng',

  // Columns selector toolbar button text
  toolbarColumns: 'Cột',
  toolbarColumnsLabel: 'Chọn cột',

  // Filters toolbar button text
  toolbarFilters: 'Bộ lọc',
  toolbarFiltersLabel: 'Hiển thị bộ lọc',
  toolbarFiltersTooltipHide: 'Ẩn',
  toolbarFiltersTooltipShow: 'Hiện',
  toolbarFiltersTooltipActive: (count) =>
    count > 1 ? `${count} bộ lọc hoạt động` : `${count} bộ lọc hoạt động`,

  // Export selector toolbar button text
  toolbarExport: 'Xuất',
  toolbarExportLabel: 'Xuất',
  toolbarExportCSV: 'Xuất CSV',
  toolbarExportPrint: 'In',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Tìm kiếm',
  columnsPanelTextFieldPlaceholder: 'Tiêu đề cột',
  columnsPanelDragIconLabel: 'Sắp xếp',
  columnsPanelShowAllButton: 'Hiện tất cả',
  columnsPanelHideAllButton: 'Ẩn tất cả',

  // Filter panel text
  filterPanelAddFilter: 'Thêm bộ lọc',
  filterPanelDeleteIconLabel: 'Xóa',
  filterPanelOperators: 'Toán tử',
  filterPanelOperatorAnd: 'Và',
  filterPanelOperatorOr: 'Hoặc',
  filterPanelColumns: 'Cột',
  filterPanelInputLabel: 'Giá trị',
  filterPanelInputPlaceholder: 'Lọc giá trị',

  // Filter operators text
  filterOperatorContains: 'Chứa',
  filterOperatorEquals: 'Bằng',
  filterOperatorStartsWith: 'Bắt đầu bằng',
  filterOperatorEndsWith: 'Kết thúc bằng',
  filterOperatorIs: 'Là',
  filterOperatorNot: 'Không là',
  filterOperatorAfter: 'Trước',
  filterOperatorOnOrAfter: 'bằng hoặc sau',
  filterOperatorBefore: 'Sau',
  filterOperatorOnOrBefore: 'bằng hoặc trước',
  filterOperatorIsEmpty: 'Rỗng',
  filterOperatorIsNotEmpty: 'Khác rỗng',

  // Filter values text
  filterValueAny: 'bất kỳ giá trị nào',
  filterValueTrue: 'Có',
  filterValueFalse: 'Không',

  // Column menu text
  columnMenuLabel: 'Danh mục',
  columnMenuShowColumns: 'Danh sách cột',
  columnMenuFilter: 'Bộ lọc',
  columnMenuHideColumn: 'Ẩn cột',
  columnMenuUnsort: 'Bỏ sắp xếp',
  columnMenuSortAsc: 'Sắp xếp tăng dần',
  columnMenuSortDesc: 'Sắp xếp giảm dần',

  // Column header text
  columnHeaderFiltersTooltipActive: (count) =>
    count > 1 ? `${count} bộ lọc hoạt động` : `${count} bộ lọc hoạt động`,
  columnHeaderFiltersLabel: 'Bộ lọc',
  columnHeaderSortIconLabel: 'Sắp xếp',

  // Rows selected footer text
  footerRowSelected: (count) =>
    count > 1 ? `${count.toLocaleString()} hàng đã chọn` : `${count.toLocaleString()} hàng đã chọn`,

  // Total rows footer text
  footerTotalRows: 'Tổng:',

  // Total visible rows footer text
  footerTotalVisibleRows: (visibleCount, totalCount) =>
    `${visibleCount.toLocaleString()} / ${totalCount.toLocaleString()}`,

  // Checkbox selection text
  checkboxSelectionHeaderName: 'Tích vào ô trống',

  // Boolean cell text
  booleanCellTrueLabel: 'Có',
  booleanCellFalseLabel: 'Không',

  // Actions cell more text
  actionsCellMore: 'Thêm',

  // Column pinning text
  pinToLeft: 'Ghim cột bên trái',
  pinToRight: 'Ghim cột bên phải',
  unpin: 'Bỏ ghim',

  // Tree Data
  treeDataGroupingHeaderName: 'Nhóm',
  treeDataExpand: 'mở rộng',
  treeDataCollapse: 'ẩn đi',

  // Grouping columns
  // groupingColumnHeaderName: 'Group',
  // groupColumn: name => `Group by ${name}`,
  // unGroupColumn: name => `Stop grouping by ${name}`,
};

export const viVN: Localization = getGridLocalization(viVNGrid, viVNCore);

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function BasicSortingGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  const [sortModel, setSortModel] = React.useState([
    {
      field: 'commodity',
      sort: 'asc',
    },
  ]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
}



\
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';

const columns = [
  { field: 'name' },
  { field: 'age', type: 'number' },
  {
    field: 'username',
    valueGetter: (params) =>
      `${params.getValue(params.id, 'name') || 'unknown'} - ${
        params.getValue(params.id, 'age') || 'x'
      }`,
    sortComparator: (v1, v2, param1, param2) =>
      param1.api.getCellValue(param1.id, 'age') -
      param2.api.getCellValue(param2.id, 'age'),
    width: 150,
  },
  { field: 'dateCreated', type: 'date', width: 180 },
  { field: 'lastLogin', type: 'dateTime', width: 180 },
];

const rows = [
  {
    id: 1,
    name: 'Damien',
    age: 25,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    name: 'Nicolas',
    age: 36,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    name: 'Kate',
    age: 19,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 4,
    name: 'Sebastien',
    age: 28,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 5,
    name: 'Louise',
    age: 23,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 6,
    name: 'George',
    age: 10,
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];

export default function ComparatorSortingGrid() {
  const [sortModel, setSortModel] = React.useState([
    {
      field: 'username',
      sort: 'asc',
    },
  ]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sortModel={sortModel}
        rows={rows}
        columns={columns}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
}





import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function OrderSortingGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  const [sortModel, setSortModel] = React.useState([
    {
      field: 'commodity',
      sort: 'asc',
    },
  ]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        sortingOrder={['desc', 'asc']}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        {...data}
      />
    </div>
  );
}




import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function DisableSortingGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        {...data}
        columns={data.columns.map((column) => ({
          ...column,
          sortable: false,
        }))}
      />
    </div>
  );
}





import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

function loadServerRows(sortModel, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (sortModel.length === 0) {
        resolve(data.rows);
        return;
      }

      const sortedColumn = sortModel[0];

      let sortedRows = [...data.rows].sort((a, b) =>
        String(a[sortedColumn.field]).localeCompare(String(b[sortedColumn.field])),
      );

      if (sortModel[0].sort === 'desc') {
        sortedRows = sortedRows.reverse();
      }

      resolve(sortedRows);
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

export default function ServerSortingGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 10,
    maxColumns: 6,
  });

  const [sortModel, setSortModel] = React.useState([
    { field: 'commodity', sort: 'asc' },
  ]);

  const [rows, setRows] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const handleSortModelChange = (newModel) => {
    setSortModel(newModel);
  };

  React.useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      const newRows = await loadServerRows(sortModel, data);

      if (!active) {
        return;
      }

      setRows(newRows);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [sortModel, data]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={data.columns}
        sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={handleSortModelChange}
        loading={loading}
      />
    </div>
  );
}




import * as React from 'react';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function MultiSortingGrid() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 100,
    maxColumns: 6,
  });

  const [sortModel, setSortModel] = React.useState([
    {
      field: 'commodity',
      sort: 'asc',
    },
    {
      field: 'desk',
      sort: 'desc',
    },
  ]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGridPro
        {...data}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
      />
    </div>
  );
}






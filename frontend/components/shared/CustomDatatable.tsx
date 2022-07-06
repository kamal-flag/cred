import { EyeIcon, PencilAltIcon, TrashIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { ClipLoader } from 'react-spinners';
import { deleteRequest, getRequestWithParams } from '../../utils/http';

const customStyles = {
  table: {
    style: {
      color: '#000',
      padding: '20px',
    },
  },
  header: {
    style: {
      fontSize: '26px',
      fontWeight: 'bold',
      color: '#000',
      paddingLeft: '16px',
    },
  },
  rows: {
    style: {
      minHeight: '45px', // override the row height
      backgroundColor: '#fff',
    },
  },
  headCells: {
    style: {
      fontSize: '16px',
      backgroundColor: '#ddd',
      fontWeight: 'bold',
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
    },
  },
  cells: {
    style: {
      fontSize: '16px',
      /*backgroundColor: '#fff',*/
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
    },
  },
};

interface Props {
  title: string;
  url: string;
  urlDisplay: string;
  extraParams: any;
  columns: any;
  actions: { edit: boolean; delete: boolean; display: boolean };
  dataReturnedToEdit: any;
  //dataReturnedToDisplay: any;
  rowEdited: any;
}
function CustomDatatable({
  title,
  url,
  urlDisplay,
  extraParams,
  columns,
  dataReturnedToEdit,
  //dataReturnedToDisplay,
  rowEdited,
  actions,
}: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [sort, setSort] = useState('');
  const [data, setData] = useState([]);

  createTheme(
    'solarized',
    {
      text: {
        primary: '#fff',
        secondary: '#2aa198',
      },
      background: {
        default: '#000',
      },
      context: {
        background: '#cb4b16',
        text: '#FFFFFF',
      },
      divider: {
        default: '#073642',
      },
      action: {
        button: 'rgba(0,0,0,.54)',
        hover: 'rgba(0,0,0,.08)',
        disabled: 'rgba(0,0,0,.12)',
      },
    },
    'dark'
  );

  const actionsButtons = {
    name: 'Actions',
    button: true,
    cell: (row: any) => (
      <>
        {actions.display && (
          <button className="ml-3" onClick={() => displayHandler(row)}>
            <EyeIcon className="text-blue-400 icon" />
          </button>
        )}
        {actions.edit && (
          <button className="ml-3" onClick={() => editHandler(row)}>
            <PencilAltIcon className="text-orange-300 icon" />
          </button>
        )}
        {actions.delete && (
          <button className="ml-3" onClick={() => deleteHandler(row)}>
            <TrashIcon className="text-red-400 icon" />
          </button>
        )}
      </>
    ),
  };

  columns = [...columns, actionsButtons];

  function editHandler(row: any) {
    dataReturnedToEdit(row);
  }

  async function deleteHandler(row: any) {
    const response: CustomHttpResponse = await deleteRequest(row.id, url);
    if (response.success) {
      fetchObjects();
    }
  }

  function displayHandler(row: any) {
    console.log('naviagte to ', `${urlDisplay}/${row.id}`);

    router.push(`${urlDisplay}/${row.id}`);
    //dataReturnedToDisplay(row);
  }
  const fetchObjects = async () => {
    setLoading(true);

    let payload = `page=${page - 1}&size=${perPage}&sort=${sort}${extraParams}`;
    const response: CustomHttpResponse = await getRequestWithParams(
      payload,
      url
    );

    if (response.success) {
      const { 'x-total': totalRows, objects } = response.data.value;
      setData(objects);

      setTotalRows(totalRows);
      console.log('objects', response.data.value);
    }

    setLoading(false);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handlePerRowsChange = (newPerPage: number, page: number) => {
    setPerPage(newPerPage);
  };

  const handleSort = async (column: any, sortDirection: string) => {
    if (column.sortField) {
      setSort(column.sortField + ',' + sortDirection);
    }
  };

  useEffect(() => {
    fetchObjects();
  }, [page, perPage, sort, extraParams]);

  useEffect(() => {
    if (rowEdited) {
      let newData = [...data];
      const index = newData.findIndex((row: any) => row.id === rowEdited['id']);

      console.log('index', rowEdited);

      if (index !== -1) {
        newData[index] = rowEdited;
      } else {
        newData.unshift(rowEdited);
      }

      setData(newData);
    }
  }, [rowEdited]);

  return (
    <DataTable
      title={title}
      columns={columns}
      data={data!}
      progressPending={loading}
      pagination
      paginationServer
      paginationTotalRows={totalRows}
      onChangeRowsPerPage={handlePerRowsChange}
      onChangePage={handlePageChange}
      onSort={handleSort}
      sortServer
      /*theme="solarized"*/
      customStyles={customStyles}
      progressComponent={<CustomLoader />}
    />
  );
}

export default CustomDatatable;

const CustomLoader = () => {
  return <ClipLoader color={'#000'} size={150} />;
};

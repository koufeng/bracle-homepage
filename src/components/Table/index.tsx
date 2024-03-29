import React, { useState, useContext, useEffect } from 'react'
import styled from '@emotion/styled'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Box from '@mui/material/Box'
// import { IsMobileContext } from 'pages/App'

const StyledTableCell = styled(TableCell)<{ isSmall?: boolean }>(({ theme, isSmall }) => ({
  [`&.${tableCellClasses.head}`]: {
    '&:first-of-type': {
      padding: '10px 0 10px 20px',
    },
    padding: '10px 0',
    fontSize: isSmall ? '12px' : '16px',
    borderBottom: '1px solid #999',
    borderTop: '1px solid #999',
    background: '#E9E9E9',
    '.MuiBox-root': {
      height: isSmall ? '30px' : '50px',
      lineHeight: isSmall ? '30px' : '50px',
    }
  },
}))

const StyledTableRow = styled(TableRow)<{ nobg?: boolean; noborder?: boolean; isSmall?: boolean }>(({ theme, nobg, noborder, isSmall }) => ({
  backgroundColor: nobg ? 'transparent' : '#999',
  color: '#272727',
  '&:hover': {
    // backgroundColor: '#2c2d34',
  },
  '&>td:first-of-type, &>th:first-of-type': {
    padding: '10px 5px 10px 0',
  },
  'td, th': {
    fontSize: isSmall ? '12px' : '14px',
    padding: '10px 5px 10px 0',
    border: 'none',
    borderBottom: noborder ? 'none' : '1px solid #999',
  },

  // hide last border
  // '&:last-child td, &:last-child th': {
  //   borderBottom: 'none',
  // },
}))

const SortIcon = styled(Box)`
  font-size: 12px;
  line-height: 0.8;
`

const NoData = styled(Box)`
  font-size: 14px;
  height: 256px;
  line-height: 256px;
  width: 100%;
  font-family: Arboria-Book;
  background-color: #999;
  color: #272727;
  text-align: center;
  user-select: none;
`

interface ColumnsProps {
  title: string
  titleRender?: any
  dataIndex: string
  key: string
  width?: number
  sorter?: (text: string, record: any) => number
  align?: 'left' | 'center' | 'right' | undefined
  render?: (text: string, record: any) => void
}

export function SortBox({ icon, active }: { icon: string; active: boolean }) {
  return icon === 'up' ? (
    <SortIcon className="iconfont" sx={{ color: active ? '#E4C989' : '#A8A8AA' }} component="i">
      &#xe608;
    </SortIcon>
  ) : (
    <SortIcon className="iconfont" sx={{ color: active ? '#E4C989' : '#A8A8AA' }} component="i">
      &#xe605;
    </SortIcon>
  )
}

const flexAlign = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
}

export default function LightTable({
  columns,
  dataSource,
  emptyText,
  isDrop,
  nobg,
  isSmall,
  handleClick,
  noborder,
}: {
  columns: any[]
  dataSource: any[]
  emptyText?: string | React.ReactNode
  isDrop?: boolean
  nobg?: boolean
  handleClick?: (item: any) => void
  noborder?: boolean
  isSmall?: boolean
}) {
  const [sortKey, setSortKey] = useState<string>('')
  const [sortValue, setSortValue] = useState<string>('')
  const [tableData, setTableData] = useState<any>(dataSource)
  // const isMobile = useContext(IsMobileContext)
  const toSortFn = (column: ColumnsProps) => {
    let sortVal = sortValue
    if (sortKey !== column.key) {
      setSortKey(column.key)
      sortVal = 'ascend'
      setSortValue('ascend')
    } else {
      const sortV = sortValue === '' ? 'ascend' : sortValue === 'ascend' ? 'desc' : ''
      sortVal = sortV
      setSortValue(sortV)
      if (sortV === '') {
        setSortKey('')
      }
    }
    let dataArr = [...dataSource]
    const arr = !sortVal
      ? [...dataSource]
      : dataArr.sort((a: any, b: any) => {
          if (sortVal === 'ascend' && column.sorter) {
            return column.sorter(a, b)
          } else if (sortVal === 'desc' && column.sorter) {
            return column.sorter(b, a)
          }
          return 0
        })
    setTableData(arr)
  }
  useEffect(() => {
    setTableData(dataSource)
  }, [dataSource])
  return (
    <>
      {(
        <TableContainer style={{ boxShadow: 'none', minWidth: '650px' }}>
          <Table sx={{ minWidth: 600 }} aria-label="hp-table">
            <TableHead>
              <TableRow>
                {columns.map((column: ColumnsProps, index: number) => (
                  <StyledTableCell
                    isSmall={isSmall}
                    key={`head-${index}`}
                    align={'center'}
                    onClick={() => column.sorter && toSortFn(column)}
                    sx={{ cursor: column.sorter ? 'pointer' : '', userSelect: 'none' }}
                  >
                    <Box
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: column.align ? flexAlign[column.align] : 'flex-start',
                      }}
                    >
                      {column.titleRender ? column.titleRender : column.title}
                      {column.sorter ? (
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <SortBox icon={`up`} active={sortKey === column.key && sortValue === 'ascend'}></SortBox>
                          <SortBox icon={`down`} active={sortKey === column.key && sortValue === 'desc'}></SortBox>
                        </Box>
                      ) : undefined}
                    </Box>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row: any, index: any) => (
                <StyledTableRow isSmall={isSmall} key={index} nobg={nobg} noborder={noborder}>
                  {columns.map((column: ColumnsProps, i: number) => (
                    <StyledTableCell
                      isSmall={isSmall}
                      key={`${index}-${i}`}
                      component="td"
                      scope="row"
                      width={column.width ? `${column.width}px` : 'auto'}
                      align={column.align ? column.align : 'left'}
                    >
                      {column.render ? column.render(row[column.dataIndex], row) : row[column.dataIndex]}
                    </StyledTableCell>
                  ))}
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          {tableData <= 0 && <NoData component="div">{emptyText ? emptyText : 'No Data'}</NoData>}
        </TableContainer>
      )}
    </>
  )
}

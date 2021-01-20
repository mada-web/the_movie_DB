import React from 'react'
// import { useEffect } from 'react'
import { Pagination as SemanticPagination } from 'semantic-ui-react'

const Pagination = (props) => {
  const { setPageNumber, dataRequest, history, find, type, pageNumber } = props

  // useEffect(() => {
  // })

  const onPageChange = (_event, data) => {
    setPageNumber(data.activePage)
  }
  // history.push(`/${type}/${find}/${pageNumber}`)

  return (
    <SemanticPagination
      defaultActivePage={dataRequest.page}
      totalPages={dataRequest.total_pages}
      onPageChange={onPageChange}
    />
  )
}

export default Pagination

import RifasTable from '../components/RifasTable'
import React from 'react'
import Title from '../components/title'

type Props = {}

const ListRifas = (props: Props) => {
  return (
    <>
      <Title title="Listagem das Rifas" />
      <RifasTable />
    </>
  )
}

export default ListRifas

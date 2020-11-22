import React from 'react'
import { gql, useQuery } from '@apollo/client'
import ElmImage from './components/ElmImage';

const query = gql`
query {
  restaurants {
    id
    name
    image_path
  }
}
`

export default function RestaurantList() {
  const { loading, error, data } = useQuery(query)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <div>
      { data.restaurants.map((item: any) =>
        <RestaurantListItem data={item} key={item.id}></RestaurantListItem>
      )}
    </div>
  )
}

function RestaurantListItem(props: { data: any }) {
  return (
    <div>
      <ElmImage src={ props.data.image_path } alt={ props.data.name } />
      <span>{ props.data.name }</span>
    </div>
  )
}

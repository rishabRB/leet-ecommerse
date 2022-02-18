import React from 'react'
import styled from 'styled-components'
import CategoryItems from './catogoryItem'
import { ItemData } from './itemdata'
import { mobile } from '../../responsive'

const Container=styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin: 10px;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Categories = () => {
    return (
          <Container>
            {ItemData.map(item=>(
                <CategoryItems item={item} />
            ))}
          </Container>
    )
}

export default Categories

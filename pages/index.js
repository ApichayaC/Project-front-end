//import { Cat } from 'backend/src/cats/cat.model';
//import { Item } from 'frontend/src/items/item.model';
import axios from 'axios'
import { useEffect, useState } from 'react'
import AddItems from '../components/addItems'
import AddCats from '../components/addCats'

export default function Home() {

  const URL = 'http://localhost:3001'

  const [cat, setCat] = useState([])
  const getCats = async () => {
    let cats = await axios.get(URL + '/cats')
    setCat(Object.assign([], cats.data))
  }

  const [item, setItem] = useState([])
  const getItems = async () => {
    let items = await axios.get(URL + '/items')
    setItem(Object.assign([], items.data))
  }

  const printCat = () => {
    return cat.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.id}</td>
          <td>{item.firstName}</td>
          <td>{item.branch}</td>
          <td>{item.age}</td>
        </tr>

      )
    })
  }


  useEffect(() => {
    getCats(), getItems()
  }, [])
  return (
    <div>


      {/* <table>
        <tr>
          <th>ID</th>
          <th>Firstname</th>
          <th>Branch</th>
          <th>Age</th>
        </tr>
        {printCat()}    
      </table> */}
      <AddCats cats={cat} items={item} URL={URL} />
      <AddItems items={item} cats={cat} URL={URL} />
    </div>
  )
}

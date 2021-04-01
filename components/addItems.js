import React, { useState } from 'react'
import axios from 'axios'
import addCatStyles from '../styles/AddCats.module.css'

const addItems = (props) => {

    const [item, setItem] = useState({
        collar: "",
        shirt: "",
        Catid: 0
    })

    const [showCatItems, setShowCatItems] = useState([])

    const allItemsCat = () => {
        return showCatItems.map((item, index) => {
            return (
                <tr key={index}>
                    <td >{item.id}</td>
                    <td >{item.firstName}</td>
                    <td >{item.branch}</td>
                    <td >{item.age}</td>
                </tr>

            )
        })
    }

    const setItemShowCat = (catId) => {
        const result = props.cats.filter(item => item.id == catId)
        setShowCatItems(result)
    }

    const showItems = () => {
        return props.items.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.collar}</td>
                    <td>{item.shirt}</td>
                    <td>{item.Catid}</td>
                    <td>
                        <button className="btn btn-outline-primary btn-sm" onClick={() => setItemShowCat(item.Catid)}> show cats</button>
                    </td>
                </tr>

            )
        })

    }

    const addItems = async () => {
        if (!item.collar || !item.Catid || !item.shirt) {
            alert("กรุณาระบุข้อมูลให้ครบและ Catid เป็นตัวเลข")
        } else {
            const result = await axios.post(props.URL + '/items', { ...item })
        }
    }


    return (
        <div className={addCatStyles.divborder}>
            <div className={addCatStyles.divbg} >
                <h1>Items</h1>
                <form>
                    <div className="row">
                        <label className="col-sm-3 col-form-label">collar </label>
                        <div className="col-sm-9">
                            <input className="form-control" style={{borderRadius:25}} onChange={(e) => { setItem({ ...item, collar: e.target.value }) }} /> <br />
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-sm-3 col-form-label">shirt </label>
                        <div className="col-sm-9">
                            <input className="form-control" style={{borderRadius:25}}  onChange={(e) => { setItem({ ...item, shirt: e.target.value }) }} /> <br />
                        </div>
                    </div>
                    <div className="row">
                        <label className="col-sm-3 col-form-label">Catid </label>
                        <div className="col-sm-9">
                            <input className="form-control" style={{borderRadius:25}}  onChange={(e) => { setItem({ ...item, Catid: +e.target.value }) }} /> <br />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <button style={{borderRadius:25}}  className="btn btn-primary btn-sm" onClick={addItems}>Add Item</button>
                    </div>
                </form>
            </div>
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-sm-4">
                        <div>
                            <table >
                                <caption>Table Items</caption>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>collar</th>
                                        <th>shirt</th>
                                        <th>Catid</th>
                                        <th></th>
                                    </tr>
                                    {showItems()}
                                </tbody>
                                <tfoot></tfoot>
                            </table>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div>
                            <table >
                                <caption>cat</caption>
                                <thead></thead>
                                <tbody>
                                    <tr>
                                        <th>ID</th>
                                        <th>Firstname</th>
                                        <th>Branch</th>
                                        <th>Age</th>
                                    </tr>
                                    {allItemsCat()}
                                </tbody>
                                <tfoot></tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default addItems
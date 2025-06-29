import React, { useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'
import '../Styles/Add.css'

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [content, setContent] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCatgeory] = useState("DUST & FREEDOM")
  const [subCategory, setSubCategory] = useState("TopWear")
  const [bestseller, setBestseller] = useState(false)
  const [sizes, setSizes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("name", name)
      formData.append("description", description)
      formData.append("content", content)
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(sizes))

      image1 && formData.append("image1", image1)
      image2 && formData.append("image2", image2)
      image3 && formData.append("image3", image3)
      image4 && formData.append("image4", image4)

      const response = await axios.post(backendUrl + '/api/product/add', formData, { headers: { token } })
      if (response.data.success) {
        toast.success(response.data.message)
        setDescription('')
        setContent('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
        setName('')
        setSizes([])
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const toggleSize = (size) => {
    setSizes(prev =>
      prev.includes(size)
        ? prev.filter(item => item !== size)
        : [...prev, size]
    )
  }

  return (
    <form onSubmit={onSubmitHandler} className="add-product-form">
      <div className="upload-section">
        <p>Upload Images</p>
        <div className="image-upload-grid">
          {[image1, image2, image3, image4].map((img, i) => (
            <label htmlFor={`image${i + 1}`} key={i}>
              <img src={!img ? assets.upload_area : URL.createObjectURL(img)} alt="" />
              <input onChange={(e) => {
                const setter = [setImage1, setImage2, setImage3, setImage4][i]
                setter(e.target.files[0])
              }} type="file" id={`image${i + 1}`} hidden />
            </label>
          ))}
        </div>
      </div>
      <div className="text-input">
        <p>Product Name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder='Type Here' />
      </div>
      <div className="text-input">
        <p>Product Description</p>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required placeholder='Type Here' />
      </div>
      <div className="text-input">
        <p>Content</p>
        <input value={content} onChange={(e) => setContent(e.target.value)} type="text" required placeholder='Type Here' />
      </div>
      <div className="selectors">
        <div>
          <p>Category</p>
          <select onChange={(e) => setCatgeory(e.target.value)} value={category}>
            <option value="DUST & FREEDOM">DUST & FREEDOM</option>
            <option value="MIDNIGHT RUN">MIDNIGHT RUN</option>
            <option value="BROTHERHOOD / SISTERHOOD">BROTHERHOOD / SISTERHOOD</option>
            <option value="LAP RAGE">LAP RAGE</option>
          </select>
        </div>
        <div>
          <p>Sub Category</p>
          <select onChange={(e) => setSubCategory(e.target.value)} value={subCategory}>
            <option value="TopWear">TopWear</option>
            <option value="BottomWear">BottomWear</option>
            <option value="WinterWear">WinterWear</option>
          </select>
        </div>
        <div>
          <p>Price (INR)</p>
          <input value={price} onChange={(e) => setPrice(e.target.value)} type="number" placeholder='₹ Price' />
        </div>
      </div>
      <div className="size-selection">
        <p>Available Sizes</p>
        {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
          <div onClick={() => toggleSize(size)} key={index} className={sizes.includes(size) ? 'selected' : ''}>
            <p>{size}</p>
          </div>
        ))}
      </div>
      <div className="checkbox-field">
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id='bestseller' />
        <label htmlFor="bestseller">Add To BestSeller</label>
      </div>
      <button type='submit' className="submit-button">ADD</button>
    </form>
  )
}

export default Add

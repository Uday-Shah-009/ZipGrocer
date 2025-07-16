import React, { useEffect, useState } from "react";

const Available = () => {
  const handleDelete = (id) => {
    setProducts(products.filter((item) => item.id !== id));
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/71r69Y7BSeL._SX679_.jpg",
        productName: "Apple iPhone 14",
        category: "Mobiles",
        price: 79999,
        quantity: 25,
        status: "In Stock",
      },
      {
        id: 2,
        image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg",
        productName: "Samsung Galaxy S23",
        category: "Mobiles",
        price: 74999,
        quantity: 15,
        status: "In Stock",
      },
      {
        id: 3,
        image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg",
        productName: "Dell Inspiron 15",
        category: "Laptops",
        price: 55999,
        quantity: 8,
        status: "Low Stock",
      },
      {
        id: 4,
        image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SX679_.jpg",
        productName: "Sony WH-1000XM4",
        category: "Headphones",
        price: 19999,
        quantity: 0,
        status: "Out of Stock",
      },
      {
        id: 5,
        image: "https://m.media-amazon.com/images/I/914hFeTU2-L._SX679_.jpg",
        productName: "Canon EOS 1500D",
        category: "Cameras",
        price: 45999,
        quantity: 5,
        status: "Low Stock",
      },
      {
        id: 6,
        image: "https://m.media-amazon.com/images/I/71r69Y7BSeL._SX679_.jpg",
        productName: "Apple iPhone 15",
        category: "Mobiles",
        price: 79999,
        quantity: 25,
        status: "In Stock",
      },
    ]);
  }, []);

  return (
    <div className="w-full h-full mr-2">
      <h1 className="text-3xl font-semibold">Available Products</h1>
      <div className="flex items-center justify-between m-2 rounded-md p-3 bg-[#19191FFF] mt-7 border-b-2 border-[#3D3D3DFF]">
        <p className="text-[18px] text-[#8C8D8BFF]">
          total Products: {products.length}
        </p>
        <button className="bg-[#3D3D3DFF] px-4 py-2 text-white rounded-md font-semibold">
          Add new Product
        </button>
      </div>
      <div className="w-[99%] m-2 py-3 bg-[#19191FFF] rounded-[8px] border border-[#393D47FF] border-solid shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F] flex flex-col justify-center">
        <div className="grid grid-cols-7 place-items-center">
          <p className="text-[#8C8D8BFF]">image</p>
          <p className="text-[#8C8D8BFF]">product name</p>
          <p className="text-[#8C8D8BFF]">category</p>
          <p className="text-[#8C8D8BFF]">price</p>
          <p className="text-[#8C8D8BFF]">quantity</p>
          <p className="text-[#8C8D8BFF]">status</p>
          <p className="text-[#8C8D8BFF]">actions</p>
        </div>
        <hr className="w-full mt-4 border-[#393D47B3]" />
        {products.map((item) => (
          <>
            <div className="grid grid-cols-7 place-items-center mt-3">
              <img
                width="40"
                height="40"
                className="rounded-md"
                src={item.image}
                alt=""
              />
              <p className="font-semibold">{item.productName}</p>
              <p className="text-[#8C8D8BFF]">{item.category}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
              <p>{item.status}</p>
              <div className="flex items-center gap-5">
                <img src="edit.svg" alt="" />
                <img onClick={() => handleDelete(item.id)} src="delete.svg" alt="" />
              </div>
            </div>
            <hr className="w-full mt-4 border-[#393D47B3]" />
          </>
        ))}
      </div>
    </div>
  );
};

export default Available;

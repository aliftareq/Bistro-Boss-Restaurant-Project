<div className="overflow-x-auto rounded-t-lg border">
  <table className="table">
    {/* head */}
    <thead className="bg-[#D1A054] text-center text-white uppercase">
      <tr>
        <th>SL No.</th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* rows */}
      {cart.map((item, idx) => (
        <tr key={item._id} className="text-center">
          <th>{idx + 1}</th>
          <td>
            <div className="flex justify-center items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-16 w-16">
                  <img src={item?.image} alt={item?.name} />
                </div>
              </div>
            </div>
          </td>
          <td>
            <span>{item?.name}</span>
          </td>
          <td>${item?.price}</td>
          <th>
            <button
              onClick={() => handleDelete(item._id)}
              className="btn bg-[#B91C1C] text-white"
            >
              <FaRegTrashAlt />
            </button>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
</div>;

const ECommerce = () => {


  const admin = localStorage.getItem('admin');
  const agent = localStorage.getItem('agent');
  console.log("ecommerceeeeeeeeeeeee");
  
  
  return (
    <>
      <div className="flex justify-center ">
        <p className="mt-24 text-lg text-black-2">Welcome {admin?"admin":"agent"}</p>
      </div>
    </>
  );
};

export default ECommerce;

'use client'
export default function DurlockSlide({ title, description, applications, resistances, imageUrl, altText }) {
    return (
      <div className="flex bg-white mx-2 my-10 rounded-lg shadow-xl">
        <div className="flex justify-between h-[85vh] flex-col p-4 gap-4 w-1/2">
          <h3 className="text-lg md:text-xl font-bold">
            {title}
          </h3>
          <p className="text-sm md:text-base">
            {description}
          </p>
          <div className="flex text-sm">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-500 text-xs">APLICACION</span>
              {applications.map((app, index) => <span key={index}>{app}</span>)}
            </div>
  
            <div className="flex flex-col ml-4">
              <span className="font-semibold text-gray-500 text-xs">RESISTENCIA</span>
              {resistances.map((res, index) => (
                <span key={index}>
                  {res.name} <br /> {res.value}
                </span>
              ))}
            </div>
          </div>
          <a href="#" className="border-[#FEDE02] border-2 text-center hover:bg-[#FEDE02] font-bold px-4 py-2">Cotiza</a>
        </div>
        <img src={imageUrl} alt={altText} className="w-1/2 rounded-r-lg object-cover" />
      </div>
    );
  }
  
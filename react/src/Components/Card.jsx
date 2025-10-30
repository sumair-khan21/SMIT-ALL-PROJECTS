// import React from 'react'

// const Card = (props) => {
//   return (
//     <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center p-5">
//       <img 
//         src={props.profile_image} 
//         alt={props.userName} 
//         className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-blue-500"
//       />

//       <h1 className="text-xl font-semibold text-gray-800 mt-4">
//         {props.userName}
//       </h1>

//       <h2 className="text-gray-500 text-sm mt-1">
//         {props.city} — <span className="text-blue-600">{props.profession}</span>
//       </h2>

//       <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 active:scale-95 transition-all duration-200">
//         Add
//       </button>
//     </div>
//   )
// }

// export default Card













//================================ APi ka data hy ==================================
import React from 'react'

const Card = (props) => {
  const { author, download_url, url, height, width, id } = props;

  return (
    <div className="max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300 m-4">
      
      {/* Image */}
      <img 
        src={download_url} 
        alt={author} 
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-5 text-center">
        <h2 className="text-lg font-semibold text-gray-800">{author}</h2>

        <p className="text-sm text-gray-500 mt-1">
          Image ID: <span className="font-medium text-gray-700">{id}</span>
        </p>

        <p className="text-sm text-gray-500">
          Size: {width} × {height}
        </p>

        {/* Buttons */}
        <div className="mt-4 flex justify-center gap-3">
          <a 
            href={download_url} 
            target="_blank" 
            rel="noreferrer" 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
          >
            View
          </a>
          <a 
            href={url} 
            target="_blank" 
            rel="noreferrer" 
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
          >
            Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;


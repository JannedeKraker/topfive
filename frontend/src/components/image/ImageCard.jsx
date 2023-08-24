export default function ImageCard({ imageSrc, title, text }) {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <h2 className="text-xl font-semibold text-gray-800 text-center">
        {title}
      </h2>
      <img className="w-full h-64 object-cover" src={imageSrc} />
      <div className="p-4">
        <p className="mt-2 text-gray-600 text-center">{text}</p>
      </div>
    </div>
  );
}

export default function Spinner() {
  const imageURL =
    'https://media.tenor.com/FawYo00tBekAAAAC/loading-thinking.gif'
  return (
    <div className="mt-20">
      <img
        width={180}
        className="text-center mx-auto"
        src={imageURL}
        alt="Loading..."
      />
    </div>
  )
}

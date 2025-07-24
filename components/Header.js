export default function Header({ title }) {
  return (
    <h1 className="text-3xl mb-4 text-center font-bold">
      <img src="/logo.png" alt={title}/>
    </h1>
  )
}

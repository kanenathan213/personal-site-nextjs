import Image from 'next/image'

export default function Avatar({
  name,
  picture,
}: {
  name: string
  picture: string
}) {
  return (
    <div className="flex items-center">
      {picture && (
        <Image
          src={`${picture}?auto=format,compress,enhance&w=100&h=100`}
          className="w-12 h-12 rounded-full mr-4"
          alt={name}
        />
      )}
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

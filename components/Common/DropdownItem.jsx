export default function DropdownItem({ children, href, additionalClassName }) {
    return <li>
      <a
        className={`
    dropdown-item
    text-sm
    py-2
    px-4
    font-normal
    block
    w-full
    whitespace-nowrap
    bg-transparent
    text-gray-700
    ${additionalClassName}
`}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center'
        }}
        href={href}
      >{children}</a>
    </li>
  }
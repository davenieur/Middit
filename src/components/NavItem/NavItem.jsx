export const NavItem = ( { name, icon, handleClick } ) => {
    return(
        <button type="button" className='nav-topic' onClick={e => handleClick(name)}>
            <img src={icon} alt={name} />
            <p>{name}</p>
        </button>
      
    )
}
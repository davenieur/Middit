export const NavItem = ( { name, icon }, url ) => {
    return(
        
        <a className='nav-topic' href={url}>
            <img src={icon} alt={name} />
            <p>{name}</p>
        </a>
      
    )
}
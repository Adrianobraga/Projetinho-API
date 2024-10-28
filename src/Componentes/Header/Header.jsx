function Header({ name }) {
  return (
    <>
       <input type="text" className="border border-current rounded-2xl" onKeyUp={(e) => name(e.target.value)}/>
    </>
  );
}

export default Header;
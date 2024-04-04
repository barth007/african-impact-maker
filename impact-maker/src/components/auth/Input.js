const Input = ({label, type, name, id, placeholder})=>{
  return(
    <>
    <div className="input__group">
      <label>{label}</label>
      <input
      placeholder={placeholder}
      type={type}
      name={name}
      id={id}
      />
    </div>
    <style jsx>{`
    .input__group label{
      font-size: var(--normal-font-size);
      display: block;
      padding-bottom: 6px;
      color: var(--white);
    }
    .input__group input{
      width: 100%;
      border-radius: 4px;
      border: 1px solid #000;
      box-sizing: border-box;
      background-color: #fff;
      padding: 4px 4px 4px 10px;
      height: 50px;
    }
    `}</style>
    </>
  )
}

export default Input;
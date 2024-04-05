const Button = ({ text, isTrue = false, onClick }) => {
    if (isTrue) {
      return (
        <>
          <button type="submit">
            {text}
          </button>
          <style jsx>{`
            button{
                transition: all .5s ease;
                cursor: pointer;
                padding: 20px 51px;
                background-color: var(--first-primary-color);
                color: var(--white);
                border-radius: 4px;
                font-size: var(--normal-font-size);
                font-weight: 700;
                border: none;
            }
            button:hover{
                background-color: rgba(255,102,0,.5803921568627451);
            }
`}</style>
        </>
      );
    } else {
      return (
        <>
          <button onClick={onClick}>
            {text}
          </button>
          <style jsx>{`
            button{
                transition: all .5s ease;
                cursor: pointer;
                padding: 20px 51px;
                background-color: var(--first-primary-color);
                color: var(--white);
                border-radius: 4px;
                font-size: var(--normal-font-size);
                font-weight: 700;
                border: none;
            }
            button:hover{
                background-color: rgba(255,102,0,.5803921568627451);
            }
`}</style>
        </>
      );
    }
  };
export default Button;


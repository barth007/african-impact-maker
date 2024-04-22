const Button = ({ text, isTrue = false, onClick, backgroundColor, border, hoverColor }) => {
    if (isTrue) {
      return (
        <>
          <button  type="submit" style={{backgroundColor: backgroundColor, border: border }}>
            {text}
          </button>
          <style jsx>{`
            button{
                transition: all .5s ease;
                cursor: pointer;
                padding: 20px 51px;
                color: var(--white);
                border-radius: 4px;
                font-size: var(--normal-font-size);
                font-weight: 700;
            }
            button:hover{
              
              text: var(--third-primary-color);
              border: 1px solid var(--third-primary-color);

            }
`}</style>
        </>
      );
    } else {
      return (
        <>
          <button onClick={onClick} style={{backgroundColor: backgroundColor, border: border }}>
            {text}
          </button>
          <style jsx>{`
            button{
                transition: all .5s ease;
                cursor: pointer;
                padding: 20px 51px;
                color: var(--white);
                border-radius: 4px;
                font-size: var(--normal-font-size);
                font-weight: 700;
            }
            button:hover{
              text: var(--third-primary-color);
              border: 1px solid var(--third-primary-color);

            }
`}</style>
        </>
      );
    }
  };
export default Button;


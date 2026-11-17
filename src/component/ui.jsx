export const Button_1 = (props) => (

    <button class={
        `mx p-2 
        ${props.underline == false ? '' : 'underline'} 
        ${!props.lowercase ? 'uppercase' : ''} 
        ${props.class} `}>

        {props.children}
    </button>

)

export const Field = () => (
    <div>

        <input type="text" />
    </div>
)

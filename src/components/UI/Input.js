import styles from "./Input.module.css";

const Input = props =>{

    return <div className={styles.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input}/>  
            {/*  {...} this is good coding if props have object like {type:'text'}
            then it will directly set the type="text" in input form */}
        </div>

}

export default Input;
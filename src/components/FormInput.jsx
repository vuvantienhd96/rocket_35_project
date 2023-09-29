import { useState } from "react"

export const FormInput = () => {
    const [fname, setfName] = useState('');
    const [lname, setlName] = useState('');
    const getNameinfo = () => {
        // user nhập last name và first name là rỗng thì hiển thị lỗi yêu cầu bắt nhập còn lại k hiển thị lỗi
        console.log('=====', fname + '  ' + lname);
    }
    return (
        <div>
            <h2>HTML Forms</h2>
            <form action="/action_page.php">
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname"onChange={(e) => {
                    console.log('e', e);
                    setfName(e.target.value);
                }} name="fname" defaultValue={fname} />
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" onChange={(e) => setlName(e.target.value)} defaultValue={lname} />
                <input type="button" value="Submit" onClick={getNameinfo}/>
            </form>
        </div>
    )

}
import {useParams} from 'react-router-dom';

export default function DeleteEmployee({updateHooks}){

    function remove() {
        const empList1 = empList.filter((emp) => emp.id !== +id);
        localStorage.setItem('empList', JSON.stringify(empList1));
        updateHooks();
    }
    debugger;
    const empList = JSON.parse(localStorage.getItem('empList'));
    const {id} = useParams();
    const emp = empList.find((emp) => emp.id === +id);
    if(!emp) {
        window.alert("No Such Employee Found");
    } else {
        const sure = window.confirm("Press Ok to delete " + id);
        sure && remove();
    }
}
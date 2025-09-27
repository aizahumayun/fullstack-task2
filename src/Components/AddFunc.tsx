interface AddFuncProps {
  no1: number;
  no2: number;
}
const AddFunc = ({no1, no2}: AddFuncProps) => {
 function addition(n1: number, n2: number): number {
     return n1 + n2;
   }
  return <div>Add: {addition(no1, no2)}</div>;
};  

export default AddFunc;

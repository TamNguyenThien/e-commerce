import { FunctionComponent } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';

import styles from './Question.module.scss'
interface QuestionProps {}
const Question: FunctionComponent<QuestionProps> = () => {
   return (
       <div className={styles.wrapper}>
           <div className={styles.label}>Hỏi đáp</div>
           <div className={styles.form}>
               <textarea rows={3} className={styles.text} placeholder="Mời bạn tham gia thảo luận" />
               <div className={styles.info}>
                   <FormGroup check>
                       <Input type="radio" name="radio1" />
                       Nam
                   </FormGroup>
                   <FormGroup check>
                       <Input type="radio" name="radio1" /> Nữ
                   </FormGroup>
                   <FormGroup>
                       Email
                       <Input type="text" placeholder="with a placeholder" />
                   </FormGroup>

                   <FormGroup>
                       Email
                       <Input type="text" placeholder="with a placeholder" />
                   </FormGroup>
                   <Button>Submit</Button>
               </div>
           </div>
       </div>
   );
}
export default Question
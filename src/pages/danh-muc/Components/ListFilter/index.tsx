import { FunctionComponent } from 'react';
import Filter from '../Filter';

interface ListFilterProps {}
const ListFilter: FunctionComponent<ListFilterProps> = () => {
   return (
       <div>
           <Filter title={'THƯƠNG HIỆU'} />
           <Filter title={'LỌC THEO GIÁ'} />
           <Filter title={'CHẤT LIỆU DÂY'} />
           <Filter />
       </div>
   );
}
export default ListFilter
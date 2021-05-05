import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

// Components
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownProps as RTDropDownProps } from 'reactstrap';

// Styles
import styles from './Dropdown.module.scss';

interface DropdownProps {
    right?: boolean;
    itemProps?: any;
    className?: string;
    dropdownMenuClassName?: string;
    dropdownOption?: RTDropDownProps;
}

const Dropdown: FunctionComponent<DropdownProps> = ({ className, right, children, itemProps, dropdownOption, dropdownMenuClassName }) => {
    const menuClassName = classnames([
        styles.dropdown_menu,
        dropdownMenuClassName,
        {
            [styles.menu_right]: right,
        },
    ]);
    return (
        <UncontrolledDropdown {...dropdownOption} className={classnames([styles.wrapper, className])}>
            <DropdownToggle tag="div">{children}</DropdownToggle>
            <DropdownMenu right={right} className={menuClassName}>
                <div className={styles.rt_dropdown_item}>
                    <div className={classnames(['menu-item', styles.menu_items])}>{itemProps}</div>
                </div>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

Dropdown.defaultProps = {
    right: false,
    className: '',
    itemProps: null,
    dropdownOption: {},
    dropdownMenuClassName: '',
};

export default Dropdown;

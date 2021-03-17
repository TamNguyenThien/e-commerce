import React, { FunctionComponent, useEffect, useState } from 'react';

// Components
import Image from '@Components/Utils/Image';
import Anchor from '@Components/Utils/Anchor';

// Utilities
import classnames from 'classnames';
import lodashFind from 'lodash/find';
import { AccessLinks } from '../../Access';
import { getUrl } from '@Utils/libs/getUrl';

// Styles
import styles from '../HeaderNavbar.module.scss';

// Contexts
import { useAccountContext } from '@Components/Account/Contexts';
import { useAppStore } from '@Components/AppStore/Context';

// Contexts
import { getAttachmentAvatar } from '@Utils/libs/getAttachment';

// Config
import host from '@Config/host';
import ImgLazy from '@Components/Utils/Lazy/Image';

interface MobileNavbarProps {}

const MobileNavbar: FunctionComponent<MobileNavbarProps> = () => {
    const { summary, toggleModal, signout } = useAccountContext();
    const { countNotification } = useAppStore();

    const { profiles } = summary?.consumer || [];
    const self: any = lodashFind(profiles, { relation: 'self' }) || {};

    const [openSidebar, setOpenSidebar] = useState<boolean>(false);

    const toggleSidebar = () => setOpenSidebar((openSidebar) => !openSidebar);

    useEffect(() => {
        if (openSidebar) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [openSidebar]);

    return (
        <>
            <button className={styles.toggle} onClick={toggleSidebar}>
                <Image src="/assets/navbar_toggle.png" width={'24px'} height={'24px'} />
            </button>

            {openSidebar && <div className={styles.overlay} onClick={toggleSidebar} />}

            <div className={classnames([styles.sidebar, { [styles.show]: openSidebar }])}>
                <div className={classnames([styles.section, styles.authentication])}>
                    {summary ? (
                        <div className={styles.user}>
                            <div className={styles.summary} onClick={signout}>
                                <Image className={styles.avatar} src={getAttachmentAvatar(self?.id, 'consumer_profile')} width={'40px'} height={'40px'} />
                            </div>

                            <ul className={styles.actions}>
                                {/* <li className={styles.item}>
                                    <a href="#" className={styles.link}>
                                        <Image src={'/assets/navbar/appointment.png'} className={styles.icon} width={'24px'} height={'24px'} />
                                        <span className={styles.badge}>+99</span>
                                    </a>
                                </li> */}

                                <li className={styles.item}>
                                    <Anchor href="/thong-bao" className={styles.link}>
                                        <Image alt={'eDoctor'} src={'/assets/navbar/notification.png'} className={styles.icon} width={'24px'} height={'24px'} />
                                        {countNotification?.total > 0 && <span className={styles.badge}>{countNotification?.total}</span>}
                                    </Anchor>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <>
                            <button onClick={toggleModal} className={styles.btn_login}>
                                Đăng ký/ Đăng nhập
                            </button>
                            <div className={styles.text}>Đăng nhập để xem kết quả</div>
                        </>
                    )}

                    <button className={styles.toggle} onClick={toggleSidebar}>
                        <Image src="/assets/navbar_close.png" width={'24px'} height={'24px'} />
                    </button>
                </div>

                <div className={classnames([styles.section, styles.info])}>
                    <h3 className={styles.title}>Thông tin</h3>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Anchor href={getUrl('/hoi-dap')} className={styles.link}>
                                <Image src={'/assets/navbar/comunicate.png'} width={'24px'} height={'24px'} />
                                Cộng đồng
                            </Anchor>
                        </li>

                        <li className={styles.item}>
                            <Anchor href={getUrl('/suc-khoe')} className={styles.link}>
                                <Image src={'/assets/navbar/news.png'} width={'24px'} height={'24px'} />
                                Tin tức sức khỏe
                            </Anchor>
                        </li>
                    </ul>
                </div>

                <div className={classnames([styles.section, styles.featured])}>
                    <Anchor href={getUrl('/dich-vu')} className={styles.title}>
                        Dịch vụ
                    </Anchor>

                    <Anchor href={getUrl('/hoi-dap')} className={styles.title}>
                        Hỏi Bác sĩ
                    </Anchor>

                    <Anchor href={getUrl('/', host.epharmacyDomain)} className={styles.title}>
                        Nhà thuốc
                    </Anchor>

                    <Anchor href={getUrl('/xet-nghiem-tai-nha.html')} className={styles.title}>
                        Xét nghiệm
                    </Anchor>

                    <Anchor href="/" className={styles.title}>
                        Tra cứu
                    </Anchor>
                </div>

                <div className={classnames([styles.section, styles.partner])}>
                    <h3 className={styles.title}>Dành cho đối tác</h3>

                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Anchor href={getUrl('/bac-si.html')} className={styles.link}>
                                <ImgLazy src={'/assets/navbar/doctor.png'} width={'24px'} height={'24px'} />
                                Bác sĩ
                            </Anchor>
                        </li>

                        <li className={styles.item}>
                            <Anchor href={getUrl('/cong-tac-vien.html')} className={styles.link}>
                                <ImgLazy src={'/assets/navbar/collaborator.png'} width={'24px'} height={'24px'} />
                                Điều dưỡng (CTV)
                            </Anchor>
                        </li>

                        <li className={styles.item}>
                            <Anchor href={getUrl('/phong-kham')} className={styles.link}>
                                <ImgLazy src={'/assets/navbar/clinics.png'} />
                                Phòng khám
                            </Anchor>
                        </li>
                    </ul>
                </div>

                {summary && (
                    <div className={classnames([styles.section, styles.access])}>
                        <h3 className={styles.title}>Cá nhân</h3>

                        <AccessLinks className={styles.list} itemClassName={styles.item} linkClassName={styles.link} badgeClassName={styles.badge} />
                    </div>
                )}

                <div className={classnames([styles.section, styles.app])}>
                    <h3 className={styles.title}>
                        Tải ứng dụng <strong>eDoctor</strong>
                    </h3>

                    <div className={styles.store}>
                        <a href="/">
                            <Image src={'/assets/navbar/app_store.png'} />
                        </a>

                        <a href="/">
                            <Image src={'/assets/navbar/google_play.png'} />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;

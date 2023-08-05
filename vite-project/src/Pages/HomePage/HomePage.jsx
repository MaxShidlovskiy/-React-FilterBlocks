import { Input, Button, Pagination } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import style from './style.module.scss'

export default function HomePage() {
    const arr = [{ header: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', day: 'Полный рабочий день', city: 'Новый Уренгой' },
    { header: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', day: 'Полный рабочий день', city: 'Москва' },
    { header: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', day: 'Сменный график работы', city: 'Самара' },
    { header: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', day: 'Полный рабочий день', city: 'Тюмень' }];
    return (
        <>
            <div>
                <Input
                    icon={<IconSearch />}
                    placeholder="Your email" rightSection={<Button>Поиск</Button>}
                />
            </div>
            <div className={style.containCart}>
                {arr.map((el, index) => {
                    return (
                        <div className={style.cart} key={index}>
                            <h1>{el.header}</h1>
                            <div className={style.outerSalaryDay}>
                                <p className={style.salary}>{el.salary}</p>
                                <p>{el.day}</p>
                            </div>
                            <div className={style.outerSalaryDay}>
                                <div className={style.icon}></div>
                                <p>{el.city}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Pagination total={10} />
        </>
    )
}
// TODO 要確認
'use client';

import Button from "@/components/Button";
import { FC } from "react";

const Home: FC = () => {

    const test = () => console.log('test');

    return (
        <>
            <Button onClick={test}>
                テスト
            </Button>
        </>
    );
};

export default Home;
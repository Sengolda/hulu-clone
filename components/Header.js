import React from 'react'
import Image from 'next/image'
import Headeritem from './Headeritem'
import {
    HomeIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
    BadgeCheckIcon
} from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row items-center h-auto justify-between">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <Headeritem title='HOME' Icon={HomeIcon} />
                <Headeritem title='TRENDING' Icon={LightningBoltIcon} />
                <Headeritem title='VERIFIED' Icon={BadgeCheckIcon} />
                <Headeritem title='COLLECTIONS' Icon={CollectionIcon} />
                <Headeritem title='SEARCH' Icon={SearchIcon} />
                <Headeritem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Image className="object-contain" src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png" height={100} width={200} />
        </header>
    )
}

export default Header
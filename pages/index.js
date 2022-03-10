import Link from 'next/link';

function RootPage() {
    return (
        <div>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <Link href='/portfolio'>Portfolio</Link>
                </li>
                <li>
                    <Link href='/clients'>Clients Page</Link>
                </li>
            </ul>
        </div>
    );
}

export default RootPage;

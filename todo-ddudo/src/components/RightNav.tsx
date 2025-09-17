export default function RightNav() {
    return (
        <aside className="w-72 border-l p-4 hidden lg:block">
            <div className="sticky top-16 space-y-3">
                <h2 className="font-semibold">추천 사용자</h2>
                <ul className="space-y-2">
                    <li className="p-2 bg-gray-100 dark:bg-gray-800 rounded">User 1</li>
                    <li className="p-2 bg-gray-100 dark:bg-gray-800 rounded">User 2</li>
                </ul>
            </div>
        </aside>
    );
    }

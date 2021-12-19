import{ useEffect, useState } from 'react';

const backendHost = "http://localhost:8080/"

function Tab() {
	const [tab, setTab] = useState({ tab: {Name: null, Id: null} })

	useEffect(() => {
		fetch(backendHost + "tabs")
		.then(res => res.json())
		.then(
			(result) => {
				setTab({
					Name: result.Name,
					Id: result.Id
				})
			}
		)
	}, [])

  return (
		<div>
			<div><h1>tab</h1></div>
			<p>Name: {tab.Name}</p>
			<p>ID: {tab.Id}</p>
    </div>
	)
}
export default Tab

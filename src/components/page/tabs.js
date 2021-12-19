import{ useState } from 'react';

const backendHost = "http://localhost:8080/"

function Tab() {
	const [tab, setTab] = useState({ tab: {Name: null, Id: null} })

	fetch(backendHost + "tabs")
	.then(res => res.json())
	.then(
		(result) => {
			console.log(result)
			setTab({
				Name: result.Name,
				Id: result.Id
			})
		}
	)

  return (
		<div>
			<p><h1>tab</h1></p>
			<p>Name: {tab.Name}</p>
			<p></p>
    </div>
	)
}
export default Tab

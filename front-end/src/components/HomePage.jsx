import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import NewSpeech from './NewSpeech';

import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	cards: {
		height: '89vh',
		color: theme.palette.secondary,
	},
	paper: {
		textAlign: 'center',
		color: theme.palette.text.secondary,
		margin: '25px'
	},
	p: {
		textIndent: '40px',
		marginTop: '20px',
		marginRight: '10px',
		marginLeft: '10px',
		marginBottom: '35px',
	},
	date: {
		position: 'absolute',
		bottom: theme.spacing(2),
		left: theme.spacing(2),
	},
	error: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
	ButtonBase: {
		width: '100%',
		height: '100%',
	},
	CardContent: {
		padding: '15px',
		width: '100%',
		height: '100%',
	},
}));

export default function HomePage() {
	const createData = (id, name, content, date, errorCount) => {
		return { id, name, content, date, errorCount };
	}

	const speeches = [
		createData(0, 'Fall of the Roman Empire', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et dui erat. Integer ac tellus nec lectus posuere gravida. Mauris commodo viverra mauris eu vestibulum. Mauris quis tortor in mi laoreet commodo. Pellentesque vitae semper elit. Praesent id dolor vestibulum leo consequat ullamcorper. Nullam vitae odio a purus convallis consectetur vitae tincidunt massa. Aliquam molestie ex lorem, eget sollicitudin leo egestas a. Vestibulum elit arcu, semper eu fermentum quis, rutrum aliquam elit. Mauris aliquam tellus vitae lobortis faucibus. Nam vel mauris libero. Nulla at augue nec dui dictum tempor. Quisque finibus malesuada velit, non feugiat magna blandit id. Praesent condimentum eleifend arcu porta cursus. Suspendisse finibus, tellus vitae bibendum auctor, tellus nunc rhoncus purus, vitae interdum leo lectus nec massa.' +
			'Sed pharetra erat vitae turpis blandit scelerisque pretium non est. Nunc sollicitudin placerat lacus. Fusce vel arcu accumsan, pharetra ante quis, laoreet dui. Quisque faucibus consectetur risus, sit amet maximus elit venenatis in. Etiam in purus sed nunc pellentesque tincidunt sed vel enim. Proin tristique neque nec orci gravida, in varius odio dapibus. Aenean lacinia risus est, id laoreet lorem feugiat eu. Integer sodales dapibus sodales. Vivamus sit amet odio ut lectus dictum pharetra eu non nisi. Mauris eget lectus justo. Vestibulum ultrices mauris eget lorem ornare, ' +
			'id facilisis purus cursus.', '2019-10-10', 9),
		createData(1, 'The Civil War', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', '2019-10-9', 4),
		createData(2, 'The Vietnam War', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', '2019-10-8', 3),
		createData(3, 'How The First Clock Was Created', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', '2019-10-05', 4),
		createData(4, 'My Favorite Gingerbread Recipes', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', '2019-10-04', 3),
		createData(5, 'Why Malai Kofta Is Delicious', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', '2019-09-25', 0),
		createData(6, 'How I Ran Out Of Ideas', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', '2019-10-06', 4),
		createData(7, 'The Korean War', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', '2019-10-11', 6),
		createData(8, 'When Should I Stop', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', '2019-10-02', 14),
		createData(9, 'I Think This Is Enough', 'Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.', '2019-10-01', 4),
	];

	const classes = useStyles();

	const [show, setShow] = useState(false);

	const [speechCards, setSpeechCards] = useState(speeches);

	const hideMenu = () => {
		return (show) ? setShow(false) : setShow(true);
	}

	const searchSpeeches = (searchTerm) => {
		let searchedSpeeches = speeches.filter(speech => (speech.name.toLowerCase().includes(searchTerm.toLowerCase())));
		return setSpeechCards(searchedSpeeches);
	}

	const sortSpeeches = (sortTerm) => {
		let sortedSpeeches = [];
		if(sortTerm === 'name'){
			sortedSpeeches = speechCards.slice().sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
		} else if(sortTerm === 'created'){
			sortedSpeeches = speechCards.slice().sort((a,b) => (a.date > b.date) ? -1 : ((b.date > a.date) ? 1 : 0));
		} else if(sortTerm === 'updated'){
			sortedSpeeches = speechCards.slice().sort((a,b) => (a.date > b.date) ? 1 : ((b.date > a.date) ? -1 : 0));
		}
		return setSpeechCards(sortedSpeeches);
	}

	return (
		<div>
			<NavBar SearchSpeeches={searchSpeeches} SortSpeeches={sortSpeeches}/>
			<div id="cards">
				<Grid container spacing={0}
					direction="row"
					justify="flex-start"
					alignItems="baseline">
					{speechCards.map(speech => (
						<Grid key={speech.id} item sm={3} xs={"auto"} zeroMinWidth>
							<Link style={{ textDecoration: 'none' }} to={{
								pathname: `/speech/${speech.id}`,
								state: { name: speech.name, content: speech.content, show: false }
							}}>
								<Card className={classes.paper}>
									<CardActions>
										<ButtonBase>
											<CardContent>
												<b>{speech.name}</b>
												<p className={classes.p} align="left">{speech.content.substring(0, 127) + '...'}</p>
												<Chip className={classes.date} size="small" label={speech.date} />
												<Chip className={classes.error} size="small" label={speech.errorCount + ' Errors Found!'} icon={<ErrorOutlineIcon />} />
											</CardContent>
										</ButtonBase>
									</CardActions>
								</Card>
							</Link>
						</Grid>
					))}
				</Grid>
			</div>
			<NewSpeech />
		</div>
	);
}
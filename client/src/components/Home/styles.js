import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    marginTop: '1rem',
    padding: '16px',
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  searchButton: {
    marginTop : '18px',
    fontSize : '13px',
    color: theme.palette.warning.dark,
  },
  PageEdit: {
    marginTop: '1rem',
    width: '30%',
    paddingLeft: '33%'
  },
}));

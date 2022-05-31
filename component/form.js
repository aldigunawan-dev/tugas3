import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Bandara } from '../data/data.js';
import MenuItem from '@mui/material/MenuItem';
import { View, StyleSheet, Text } from 'react-native';
const FormSearch = ({navigation}) => {
  const classes = useStyles();
  // create state variables for each input
  
  const [asal, setAsal] = useState("")
  const [tujuan, setTujuan] = useState("")
  const [tanggal, setTanggal] = useState("")
  
  const ubahAsal = (event) => {
    setAsal(event.target.value);
  };
  const ubahTujuan = (event) => {
    setTujuan(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    var data = {
      asal : asal,
      tujuan : tujuan,
      tanggal : tanggal,
    }
    console.log(data.asal, data.tujuan, data.tanggal);
    navigation.navigate('ResultScreen', { data })
  };

  return (
        <form className={classes.ini} onSubmit={handleSubmit}>
          <TextField
            label="Asal"
            select
            variant="filled"
            type="text"
            value={asal}
            onChange={ubahAsal}
          >{Bandara.map((option) => (
            <MenuItem key={option.bandara_kode} value={option.bandara_nama}>
              {option.bandara_kode} {option.bandara_nama}
            </MenuItem>
          ))}
          </TextField>
          <TextField
            label="Tujuan"
            select
            variant="filled"
            type="text"
            value={tujuan}
            onChange={ubahTujuan}
            >{Bandara.map((option) => (
              <MenuItem key={option.bandara_kode} value={option.bandara_nama}>
                {option.bandara_kode} {option.bandara_nama}
              </MenuItem>
            ))}
            </TextField>
          <TextField
            label="Tanggal keberangkatan"
            variant="filled"
            type="date"
            value={tanggal}
            onChange={e => setTanggal(e.target.value)}
            InputLabelProps={{
             shrink: true,
          }}
        />
        <div>
          <Button type="submit" variant="contained" color="primary" >
            Cari
          </Button>
        </div>
        </form>
  );
};

const useStyles = makeStyles(theme => ({
  ini: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

export default FormSearch;
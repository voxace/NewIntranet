const router = require('express').Router()
const renderDoc = require('../../renderDoc')

/* --------- CORE SUBJECTS --------- */

router.get('/english', (req, res) => {renderDoc(req,res,'1lRsBAZJNKsSeHyZyIwzWw6vHzl6qBN9Yj-i7qBrpPxE')})

router.get('/mathematics', (req, res) => {renderDoc(req,res,'1ghr5MzfM-Usf6yUH0OtnRj-A6Tg0OX7Pueqbe8KXFEs')})

router.get('/science', (req, res) => {renderDoc(req,res,'1B0Rx-PgXWlQ32Md_TvmMImD_iEnSnawhKB9Jmocfmew')})

router.get('/hsie', (req, res) => {renderDoc(req,res,'1BVE1kWHBw-v6RAZXXGxv4dKR80WOMp2SopQLMY0_jfI')})

router.get('/pdhpe', (req, res) => {renderDoc(req,res,'1dbPH5VmaAdr93nwLb_KUf-qfdGxsmAYbGetwpntzGZ0')})

/* --------- ELECTIVES --------- */

router.get('/agriculture', (req, res) => {renderDoc(req,res,'1eMKhoztYPKkzFH8KE2LgR9HHBE0xrk8DAjRKBRbJTvA')})

router.get('/commerce', (req, res) => {renderDoc(req,res,'1304S_sSNXXEiD-7PddotnwNFEXL78XPVIUP_kovprk4')})

router.get('/drama', (req, res) => {renderDoc(req,res,'19CeGrqbpwWh-N153xBOAWXodQDF8yIl87ORC1zDeGT0')})

router.get('/engineering', (req, res) => {renderDoc(req,res,'1DPtZtjP1X8J-s_iyhhp606-lHbRUXddOA9QOOoZuQH4')})

router.get('/film-vid', (req, res) => {renderDoc(req,res,'1PU0A6FQ1EWztJPGgr2USnhx9A6JrhzBIdu89OoPp96c')})

router.get('/food-tech', (req, res) => {renderDoc(req,res,'1Oz49CtJbYTikx_vCJiG8hBAsAFvdFV5xsr73T36eyIU')})

router.get('/ist', (req, res) => {renderDoc(req,res,'1U5wjRqdQMdjQZTvKTmIZhccjBaWx3w3vK3YE-mklDRs')})

router.get('/mixed-materials', (req, res) => {renderDoc(req,res,'18M1n6DdW3-8t6TritlwBPbbx60lTX8ZkrozEVZmD1Xw')})

router.get('/music', (req, res) => {renderDoc(req,res,'1bRX9J0xsBNxd6g4LUGZg0VK9PzLja9rPLYWbyBfGbSs')})

router.get('/pass', (req, res) => {renderDoc(req,res,'1cHgQSfL7wUs-ii24BiMDigjfBsUVUa6julXShRwhs5o')})

router.get('/photography', (req, res) => {renderDoc(req,res,'1fdklRmszSl66YnLvLq97HMiMvpZ1tVwk6gTHdF0VhxM')})

router.get('/textiles', (req, res) => {renderDoc(req,res,'1-tf1980DA8QyWiVbZx5xMuWHxlUljUJSpNBH1teGuFg')})

router.get('/visual-arts', (req, res) => {renderDoc(req,res,'1SbDDW2ZZt1hKLR44loplqkyN0xv3C_mdNZ14bN2ac-8')})

module.exports = router

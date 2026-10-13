// 戦法の周期表の行: 主役の駒と、それを置く筋で戦法を並べる
// note: その駒が主役になる理由（周期表の行見出しのツールチップと戦法の解説に出す）
window.Kakoi = window.Kakoi || {};
Kakoi.TACTIC_FAMILIES = [
  { id: 'furibisha-rook', name: '振り飛車：飛車の筋', side: 'furibisha', piece: '飛', note: '飛車を左へ振って攻めの筋を決め、玉は反対の右側へ寄せて囲う' },
  { id: 'ibisha-silver', name: '居飛車：銀の筋', side: 'ibisha', piece: '銀', note: '桂は前にしか進めず戻れない消耗品なので、早く跳ねるのは非常時に限られる。攻めの駒は後退もできる銀を繰り出すのが正攻法で、銀をどの筋に進めるかで戦法が分かれる' },
  { id: 'ibisha-rook', name: '居飛車：飛車の筋', side: 'ibisha', piece: '飛' },
];

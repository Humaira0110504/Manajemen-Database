db.mahasiswa.bulkWrite([
  { insertOne: { document: { nama: "Budi", nim: "A12346", jurusan: "Sistem Informasi", nilai: 75 } } },
  { insertOne: { document: { nama: "Citra", nim: "A12347", jurusan: "Informatika", nilai: 92 } } },
  { deleteOne: { filter: { nim: "D0222030" } } }
])

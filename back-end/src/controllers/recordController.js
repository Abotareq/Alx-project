export const storeRecord = async (req, res) => {
  try {
    const { userId, record } = req.body;

    // Validate input
    if (!userId || !record) {
      return res.status(400).json({ message: "User ID and record are required" });
    }

    // Store the record in the database
    const newRecord = new Record({
      userId,
      record,
    });

    await newRecord.save();

    res.status(201).json({ message: "Record stored successfully", record: newRecord });
  } catch (error) {
    res.status(500).json({ message: "Error storing record", error: error.message });
  }
}
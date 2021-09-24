const simpleStorage = artifacts.require('simpleStorage');

contract('SimpleStorage', () => {
  it('should turn data to string', async () => {
    const storage = await simpleStorage.new();
    await storage.updateData(10);
    const data = await storage.readData();
    assert(data.toString() === '10');
  });
});

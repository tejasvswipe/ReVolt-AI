const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, company, message } = req.body;

  const { error } = await supabase
    .from("waitlist")
    .insert([
      {
        name,
        email,
        company,
        message
      }
    ]);

  if (error) {
    console.error(error);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({
    success: true
  });
};
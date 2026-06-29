require "net/http"
require "json"
require "fileutils"
require "CGI"

XIV_API = "https://v2.xivapi.com/api/sheet/Item"
UNIVERSALIES_API = "https://universalis.app/api/v2/marketable"

OUTPUT_FILE = "src/item-master.json"

item_master = {}
last_row_id = 0
marketable_ids = JSON.parse(Net::HTTP.get(URI(UNIVERSALIES_API)))
marketable_size = marketable_ids.size

loop do
  puts "Loading #{item_master.size} / #{marketable_size} items..."

  uri = URI("#{XIV_API}?after=#{last_row_id}&language=ja&fields=row_id,Name,Icon")
  json = JSON.parse(Net::HTTP.get(uri))
  rows = json["rows"]
  break if rows.nil? || rows.empty?

  rows.each do |row|
    id = row["row_id"]
    next unless marketable_ids.include?(id)

    fields = row["fields"]
    name = fields["Name"]
    next if name.nil? || name.empty?

    icon = fields.dig("Icon", "path")&.then do |path|
      "https://v2.xivapi.com/api/asset?format=jpg&path=#{CGI.escape(path)}"
    end

    item_master[id] = { name:, icon: }.compact
  end

  break if item_master.size >= marketable_size

  last_row_id = rows.last["row_id"]
end

File.write(
  OUTPUT_FILE,
  JSON.pretty_generate(item_master)
)

puts "Generated #{item_master.size} items."
puts OUTPUT_FILE
